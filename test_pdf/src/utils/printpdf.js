
const formatCitizenId = (id) => {
  if (!id) return '';
  const cleanId = id.replace(/\D/g, '').substring(0, 13);
  if (cleanId.length < 13) return cleanId;
  return `${cleanId.substring(0, 1)}-${cleanId.substring(1, 5)}-${cleanId.substring(5, 10)}-${cleanId.substring(10, 12)}-${cleanId.substring(12, 13)}`;
};

const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length === 10) {
    return `${cleanPhone.substring(0, 3)}-${cleanPhone.substring(3, 6)}-${cleanPhone.substring(6, 10)}`;
  }
  return phone;
};

const formatDateToThai = (dateString) => {
  if (!dateString) return { day: '', month: '', year: '' };
  const date = new Date(dateString);
  if (isNaN(date)) return { day: '', month: '', year: '' };
  const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear() + 543
  };
};

const splitBirthDate = (dateString) => {
  if (!dateString) return { d: '', m: '', y: '' };
  if (dateString.includes('-')) {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      return {
        d: String(date.getDate()).padStart(2, '0'),
        m: String(date.getMonth() + 1).padStart(2, '0'),
        y: date.getFullYear() + 543
      };
    }
  }
  return { d: '', m: '', y: '' };
};

export const generatePDF = (form, imageData, pdfUtils) => {
  const dateData = formatDateToThai(form.date);
  const bDate = splitBirthDate(form.birthDate);

  const docDefinition = {
    defaultStyle: pdfUtils.primaryStyle(),
    pageMargins: [60, 30, 60, 30],
    content: [
      {
        image: imageData.logo,
        width: 60,
        absolutePosition: { x: 50, y: 30 },
      },
      { text: 'โครงการเยาวชนแถวหน้า ครั้งที่ 12', alignment: 'center', bold: true, fontSize: 16, marginTop: 30 },
      { text: 'ผลการเรียนดีเด่น และผลงานคลิปสั้น', alignment: 'center', bold: true, marginTop: 4 },
      { text: `หัวข้อ “พัฒนาอย่างก้าวกระโดด ด้วย Ai เพื่อพัฒนาชีวิตอย่างยั่งยืนในอนาคต”`, alignment: 'center', bold: true, marginTop: 4 },
      {
        text: [
          { text: 'วันที่ ' },
          { text: `${dateData.day} `, bold: true },
          { text: `${dateData.month} `, bold: true },
          { text: ' พ.ศ. ' },
          { text: `${dateData.year}`, bold: true }
        ],
        alignment: 'right', marginTop: 7, marginBottom: 7
      },

      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'ชื่อ-นามสกุล  ' }, 
            { text: form.prefix || '', bold: true },
            { text: form.fullName || '', bold: true }], width: '*', marginLeft: 45 },
          { text: [{ text: 'เลขประจำตัวประชาชน  ' }, { text: formatCitizenId(form.citizenId) || '', bold: true }], width: 230, marginLeft: 10 }
        ]
      },

      {
        marginTop: 2,
        columns: [
          {
            text: [
              { text: 'วัน/เดือน/ปี พ.ศ. เกิด ' },
              { text: `${bDate.d}/${bDate.m}/${bDate.y}`, bold: true }
            ],
            width: '*'
          },
          {
            text: [
              { text: 'อายุ  ' },
              { text: String(form.age || ''), bold: true },
              { text: ' ปี (นับตาม พ.ศ. เกิด)' }
            ],
            width: 230, marginLeft: 10,
          }
        ]
      },
      {
        marginTop: 2,
        columnGap: 15,
        columns: [
          { text: [{ text: 'เกรดผลการเรียน  '}, { text: form.grade || '', bold: true }], width: 'auto', }, 
          { text: [{ text: 'ระดับชั้นที่เรียน  '}, { text: form.educationLevel || '', bold: true }], width: 'auto', },
          { text: [{ text: 'ชื่อสถาบันการศึกษา  '}, { text: form.school || '', bold: true }], width: 'auto', }
        ]
      },

       {
        marginTop: 2,
        columns: [
          { text: 'ที่อยู่ตามภูมิลำเนาของผู้สมัครผู้รับทุน', width: 'auto', marginLeft: 45, },
          { text: [{ text: 'บ้านเลขที่     '}, { text: form.addressNo || '', bold: true }], width: 'auto', marginLeft: 25, },
          { text: [{ text: 'หมู่ที่     '}, { text: form.villageNo || '', bold: true }], width: 'auto', marginLeft: 20, },
        ]
      },
      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'ตรอก/ซอย        '}, { text: form.soi || '', bold: true }], width: '*', },
          { text: [{ text: 'ถนน     '}, { text: form.road || '', bold: true }], width: 230, },
        ]
      },
      {
        marginTop: 2,
        columnGap: 10,
        columns: [
          { text: [{ text: 'ตำบล/แขวง     '}, { text: form.subDistrict || '', bold: true }], width: '*', },
          { text: [{ text: 'อำเภอ/เขต  '}, { text: form.district || '', bold: true }], width: '*', },
          { 
            text: [
              { text: 'จังหวัด  ' }, 
              { text: form.province || '', bold: true },
              { text: ' ' }, 
              { text: form.postalCode || '', bold: true }
            ], 
            width: '*', 
          }
        ]
      },

      {
        marginTop: 2,
        columns: [
          { text: 'ที่อยู่สำหรับจัดส่งเอกสารของผู้สมัครผู้รับทุน', width: 'auto', marginLeft: 45, },
          { text: [{ text: 'บ้านเลขที่     '}, { text: form.sendaddressNo || '', bold: true }], width: 'auto', marginLeft:0, },
          { text: [{ text: 'หมู่ที่     '}, { text: form.sendvillageNo || '', bold: true }], width: 'auto', marginLeft:  20, },
        ] 
      },
      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'ตรอก/ซอย        '}, { text: form.sendsoi || '', bold: true }], width: '*', },
          { text: [{ text: 'ถนน     '}, { text: form.sendroad || '', bold: true }], width: 230, },
        ]
      },
      {
        marginTop: 2,
        columnGap: 10,
        columns: [
          { text: [{ text: 'ตำบล/แขวง  '}, { text: form.sendsubDistrict || '', bold: true }], width: '*', },
          { text: [{ text: 'อำเภอ/เขต  '}, { text: form.senddistrict || '', bold: true }], width: '*', },
          { text: [
            { text: 'จังหวัด  '}, 
            { text: form.sendprovince || '', bold: true },
            { text: ' ' }, 
            { text: form.sendpostalCode || '', bold: true }
        ], 
        width: '*', 
      }
        ]
      },

      { 
        text: 'ข้อมูลของบิดาหรือมารดา (บุคลากรประเภทข้าราชการ ลูกจ้างประจำ พนักงานราชการ สมาชิกกองอาสารักษาดินแดน กำนัน ผู้ใหญ่บ้าน และลูกจ้างเหมาบริการ ที่ปฏิบัติงานติดต่อกันมาแล้วไม่น้อยกว่า 1 ปี นับถึงวันปิดรับสมัครของกรมการปกครอง)', 
        fontSize: 16, 
        marginTop: 5,
        marginBottom: 5,
        lineHeight: 1.35,
        leadingIndent: 40
      },
      {
        columns: [
          { text: [{ text: 'ชื่อ-สกุล  '}, 
            { text: form.parentPrefix || '', bold: true },
            { text: form.parentName || '', bold: true }], width: '*', },
          { text: [{ text: 'เลขประจำตัวประชาชน  '}, { text: formatCitizenId(form.parentCitizenId) || '', bold: true }], width: 230, }
        ]
      },
      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'ปัจจุบันดำรงตำแหน่ง  '}, { text: form.parentPosition || '', bold: true }], width: '*', },
          { text: [{ text: 'ระยะเวลาปฏิบัติงาน  '}, { text: form.parentDuration || '', bold: true }], width: 230, }
        ]
      },
      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'โทรศัพท์มือถือ (ส่วนตัว)  '}, { text: formatPhoneNumber(form.parentPhone) || '', bold: true }], width: '*', },
          { text: [{ text: 'โทรศัพท์ (ที่ทำงาน)      '}, { text: formatPhoneNumber(form.parentWorkPhone) || '', bold: true }], width: 230, marginLeft: 20, }
        ]
      },
      {
        marginTop: 2,
        columnGap: 10,
        columns: [
          { text: [{ text: 'สังกัด  '}, { text: form.parentDepartment || '', bold: true }], width: '*', },
          { text: [{ text: 'อำเภอ/เขต  '}, { text: form.parentdistrict || '', bold: true }], width: '*', },
          { text: [
            { text: 'จังหวัด  '}, 
            { text: form.parentprovince || '', bold: true },
            { text: ' ' }, 
            { text: form.parentpostalCode || '', bold: true }
        ], 
        width: '*', 
      }
        ]
      },
      { 
        text: [
          { text: 'ประสงค์สมัครและส่งผลงานประกวดประเภท ' }, 
          { text: form.contestType || '', bold: true },
          { text: ' เกรดเฉลี่ยสะสม ' }, 
          { text: form.gpax || '', bold: true }
        ], 
        marginTop: 2,
        lineHeight: 1.35
      },

{
  marginTop: 70,
  alignment: 'center',
  layout: 'noBorders',
  table: {
    widths: ['*'],
    body: [
      [
        {
          text: [
            { text: 'ลายมือชื่อ ', bold: true },
            { text: `${'.'.repeat(40)}`, bold: true },
            { text: ' ผู้สมัคร', bold: true }
          ],
          alignment: 'center'
        }
      ],
      [
        { text: [{ text: '('}, 
            { text: form.prefix || '', bold: true },
            { text: form.fullName || '', bold: true },
            { text: ')  '}], 
          bold: true,
          alignment: 'center',
          margin: [0, 5, 0, 5] 
        }
      ],
      [
        {
          text: [
            { text: 'ลายมือชื่อ ', bold: true },
            { text: `${'.'.repeat(40)}`, bold: true },
            { text: ' เจ้าหน้าที่ผู้รับคำขอ', bold: true } 
          ],
          alignment: 'center'
        }
      ],
      [
        {
          text: '(นางสาวเจ้าหน้าที่ ทดสอบ)',
          bold: true,
          alignment: 'center',
          margin: [0, 2, 0, 0]
        }
      ],
      [
        {
          text: 'เจ้าหน้าที่อำเภอ',
          bold: true,
          alignment: 'center'
        }
      ]
    ]
  }
}
    ]
  }
  pdfUtils.pdfPrintPreview(docDefinition)
}




export default generatePDF

