<template>
  <v-container class="py-10">
    <v-card class="mx-auto pa-10" max-width="1000" elevation="4">
      <!-- <div class="text-center mb-10">
        <h1 class="text-h5 font-weight-bold mb-2">โครงการเยาวชนแถวหน้า ครั้งที่ 12</h1>
        <p class="text-subtitle-1">แบบพิมพ์ข้อมูลผู้สมัครแบบรายบุคคล</p>
      </div> -->

      <v-form ref="formRef">
          <v-row justify="end" class="mb-2">
            <v-col cols="12" md="3">
                <v-text-field
                   v-model="form.date"
                   label="วันที่"
                  type="date"
                  variant="outlined"
                 density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <h3 class="text-h6 font-weight-bold mb-4 text-blue-darken-4 border-bottom pb-2">1. ข้อมูลผู้สมัคร</h3>
        <v-row>
          <v-col cols="12" md="8"><v-text-field v-model="form.fullName" label="ชื่อ-นามสกุล" variant="outlined" density="compact"></v-text-field></v-col>
         <v-col cols="12" md="4"><v-text-field v-model="form.citizenId" label="เลขประจำตัวประชาชน" variant="outlined" density="compact"></v-text-field></v-col>
        <v-col cols="12" md="4"><v-text-field v-model="form.birthDate" label="วัน/เดือน/ปี พ.ศ. เกิด" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="3"><v-text-field v-model="form.age" label="อายุ (ปี)" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="5"><v-text-field v-model="form.grade" label="เกรดผลการเรียน" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.educationLevel" label="ระดับชั้นที่เรียน" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.school" label="ชื่อสถาบันการศึกษา" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.gpax" label="เกรดเฉลี่ยสะสม"  variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="form.contestType"
              :items="['ผลการเรียนดีเด่น', 'ผลงานคลิปสั้น']"
              label="ประเภทการส่งผลงาน"
              variant="outlined"
              density="compact"
            ></v-select>
          </v-col>
        </v-row>

        <h3 class="text-h6 font-weight-bold mt-8 mb-4 text-blue-darken-4 border-bottom pb-2">2. ที่อยู่ตามภูมิลำเนา</h3>
        <v-row>
          <v-col cols="12" md="3"><v-text-field v-model="form.addressNo" label="บ้านเลขที่" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="3"><v-text-field v-model="form.villageNo" label="หมู่ที่" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.soi" label="ตรอก/ซอย" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.road" label="ถนน" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.subDistrict" label="ตำบล/แขวง" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.district" label="อำเภอ/เขต" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12"><v-text-field v-model="form.province" label="จังหวัด/รหัสไปรษณีย์" variant="outlined" density="compact"></v-text-field></v-col>
        </v-row>

        <h3 class="text-h6 font-weight-bold mt-8 mb-4 text-blue-darken-4 border-bottom pb-2">3. ข้อมูลบิดาหรือมารดา</h3>
        <v-row>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentName" label="ชื่อ-สกุล" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentCitizenId" label="เลขประจำตัวประชาชน" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentPosition" label="ตำแหน่ง" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentDuration" label="ระยะเวลาปฏิบัติงาน" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.parentPhone" label="มือถือ (ส่วนตัว)" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.parentWorkPhone" label="โทรศัพท์ที่ทำงาน" variant="outlined" density="compact"></v-text-field></v-col>
           <v-col cols="12" md="4"><v-text-field v-model="form.parentDepartment" label="สังกัด" variant="outlined" density="compact"></v-text-field></v-col>
            <v-col cols="12" md="6"><v-text-field v-model="form.district" label="อำเภอ/เขต" variant="outlined" density="compact"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.province" label="จังหวัด/รหัสไปรษณีย์" variant="outlined" density="compact"></v-text-field></v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>
        <div class="d-flex justify-end gap-2">
          <v-btn color="blue-darken-4" @click="printPDF">
            <v-icon start>mdi-printer</v-icon> พิมพ์ PDF
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import pdfUtils from '../utils/pdf'
import imageData from '../assets/image/image.json'


const STORAGE_KEY = 'applicant_form_data'



const formRef = ref(null)

const form = reactive({
  date: '',
  fullName: '',
  citizenId: '',
  birthDate: '',
  age: '',
  educationLevel: '',
  gpax: '', 
  school: '',
  addressNo: '',
  villageNo: '',
  soi: '',
  road: '',
  subDistrict: '',
  district: '',
  province: '',
  parentName: '',
  parentCitizenId: '',
  parentPosition: '',
  parentDuration: '',
  parentDepartment: '',
  parentPhone: '',
  parentWorkPhone: '',
  contestType: '',
  projectTitle: '',
  grade:''
})

onMounted(() => {
  const savedData = localStorage.getItem(STORAGE_KEY)
  if (savedData) {
    try {
      Object.assign(form, JSON.parse(savedData))
    } catch (e) {
      console.error('Error parsing saved form data', e)
    }
  }
})

watch(form, (newVal) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
}, { deep: true })

const formatCitizenId = (id) => {
  if (!id) return ''
  const cleanId = id.replace(/\D/g, '')
  if (cleanId.length !== 13) return id
  return `${cleanId.substring(0, 1)}-${cleanId.substring(1, 5)}-${cleanId.substring(5, 10)}-${cleanId.substring(10, 12)}-${cleanId.substring(12, 13)}`
}

const formatPhoneNumber = (phone) => {
  if (!phone) return ''
  const cleanPhone = phone.replace(/\D/g, '')
  if (cleanPhone.length === 10) {
    return `${cleanPhone.substring(0, 3)}-${cleanPhone.substring(3, 6)}-${cleanPhone.substring(6, 10)}`
  }
  if (cleanPhone.length === 9) {
    return `${cleanPhone.substring(0, 2)}-${cleanPhone.substring(2, 5)}-${cleanPhone.substring(5, 9)}`
  }
  return phone
}

 const formatDateToThai = (dateString) => {
  if (!dateString) return { day: '', month: '', year: '' }
   const date = new Date(dateString)
  const day = date.getDate()
   const months = [
     'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
     'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ]
   const month = months[date.getMonth()]
   const year = date.getFullYear() + 543
   return { day, month, year }
 }

 const printPDF = () => {
   const dateData = formatDateToThai(form.date)
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
         { text: `${dateData.month}` , bold: true }, 
         { text: ' พ.ศ. ' },
         { text: `${dateData.year}`, bold: true }
       ], 
         alignment: 'right', marginTop: 7, marginBottom: 7
     },

      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'ชื่อ-นามสกุล  '}, { text: form.fullName || '', bold: true } ], width: '*', marginLeft: 45, },
          { text: [{ text: 'เลขประจำตัวประชาชน  '}, { text: formatCitizenId(form.citizenId) || '', bold: true } ], width: 230, marginLeft: 10, }
        ]
      },

      {
        marginTop: 2,
        columns: [
          { text: [{ text: 'วัน/เดือน/ปี พ.ศ. เกิด  '}, { text: form.birthDate || '', bold: true }], width: '*', },  
          { text: [{ text: 'อายุ  '}, { text: form.age || '', bold: true }, { text: form.age ? ' ปี (นับตาม พ.ศ. เกิด)' : '' }], width: 230, marginLeft: 10, }
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
          { text: [{ text: 'จังหวัด  '}, { text: form.province || '', bold: true }], width: '*', }
        ]
      },

      {
        marginTop: 2,
        columns: [
          { text: 'ที่อยู่สำหรับจัดส่งเอกสารของผู้สมัครผู้รับทุน', width: 'auto', marginLeft: 45, },
          { text: [{ text: 'บ้านเลขที่     '}, { text: form.addressNo || '', bold: true }], width: 'auto', marginLeft:0, },
          { text: [{ text: 'หมู่ที่     '}, { text: form.villageNo || '', bold: true }], width: 'auto', marginLeft:  20, },
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
          { text: [{ text: 'ตำบล/แขวง  '}, { text: form.subDistrict || '', bold: true }], width: '*', },
          { text: [{ text: 'อำเภอ/เขต  '}, { text: form.district || '', bold: true }], width: '*', },
          { text: [{ text: 'จังหวัด  '}, { text: form.province || '', bold: true }], width: '*', }
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
          { text: [{ text: 'ชื่อ-สกุล  '}, { text: form.parentName || '', bold: true }], width: '*', },
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
          { text: [{ text: 'อำเภอ/เขต  '}, { text: form.district || '', bold: true }], width: '*', },
          { text: [{ text: 'จังหวัด  '}, { text: form.province || '', bold: true }], width: '*', }
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
            { text: '...............................................', bold: true },
            { text: ' ผู้สมัคร', bold: true }
          ],
          alignment: 'center'
        }
      ],
      [
        {
          text: '(นางสาวทดสอบ ใจดีดี)',
          bold: true,
          alignment: 'center',
          margin: [0, 5, 0, 5] 
        }
      ],
      [
        {
          text: [
            { text: 'ลายมือชื่อ ', bold: true },
            { text: '............................................', bold: true },
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

</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid #0D47A1;
}
</style>