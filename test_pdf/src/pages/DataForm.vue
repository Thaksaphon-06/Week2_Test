<template>
  <v-container class="py-10">
    <v-card class="mx-auto pa-10" max-width="1000" elevation="4">
      <div class="text-center mb-10">
        <h1 class="text-h5 font-weight-bold text-green-darken-4 mb-2">แบบพิมพ์ข้อมูลผู้สมัครแบบรายบุคคล</h1>
      </div>

      <v-form ref="formRef">
          <v-row justify="end" class="mb-2">
            <v-col cols="12" md="3">
                <v-text-field
                   v-model="form.date"
                   label="วันที่"
                  type="date"
                  variant="outlined"
                 density="compact"
                 :rules="[v => !!v || 'กรุณากรอกวันที่']"
                ></v-text-field>
            </v-col>
        </v-row>
        <h3 class="text-h6 font-weight-bold mb-4 text-green-darken-4 border-bottom pb-2">1. ข้อมูลผู้สมัคร</h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="form.prefix"
              :items="['นาย', 'นาง', 'นางสาว']"
              label="คำนำหน้า"
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'กรุณากรอกคำนำหน้า']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.fullName" label="ชื่อ-นามสกุล" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกชื่อ-นามสกุล']" ></v-text-field></v-col>
          <v-col cols="12" md="5">
        <v-text-field
          v-model="form.citizenId"
          v-maska="'#-####-#####-##-#'"
          label="เลขประจำตัวประชาชน"
          variant="outlined"
          density="compact"
          :rules="rules"
        ></v-text-field>
      </v-col>
          <v-col cols="12" md="4">
      <v-text-field
        v-model="form.birthDate"
        label="วัน/เดือน/ปี พ.ศ. เกิด"
        variant="outlined"
        density="compact"
        type="date"
        :rules="[v => !!v || 'กรุณากรอกวัน/เดือน/ปี พ.ศ. เกิด']"
      ></v-text-field>
      </v-col>
          <v-col cols="12" md="3"><v-text-field v-model="form.age" label="อายุ (ปี)" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกอายุ (ปี)']"></v-text-field></v-col>
          <v-col cols="12" md="5"><v-text-field v-model="form.grade" label="เกรดผลการเรียน" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกเกรดผลการเรียน']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.educationLevel" label="ระดับชั้นที่เรียน" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกระดับชั้นที่เรียน']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.school" label="ชื่อสถาบันการศึกษา" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกชื่อสถาบันการศึกษา']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.gpax" label="เกรดเฉลี่ยสะสม"  variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกเกรดเฉลี่ยสะสม']"></v-text-field></v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="form.contestType"
              :items="['ผลการเรียนดีเด่น', 'ผลงานวิชาการ', 'ผลงานนวัตกรรม']"
              label="ประเภทการส่งผลงาน"
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'กรุณากรอกประเภทการส่งผลงาน']"
            ></v-select>
          </v-col>
        </v-row>

        <h3 class="text-h6 font-weight-bold mt-8 mb-4 text-green-darken-4 border-bottom pb-2">2. ที่อยู่ตามภูมิลำเนา</h3>
        <v-row>
          <v-col cols="12" md="3"><v-text-field v-model="form.addressNo" label="บ้านเลขที่" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกบ้านเลขที่']"></v-text-field></v-col>
          <v-col cols="12" md="3"><v-text-field v-model="form.villageNo" label="หมู่ที่" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกหมู่ที่']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.soi" label="ตรอก/ซอย" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกตรอก/ซอย']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.road" label="ถนน" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกถนน']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.subDistrict" label="ตำบล/แขวง" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกตำบล/แขวง']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.district" label="อำเภอ/เขต" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกอำเภอ/เขต']"></v-text-field></v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="form.province"
              :items="provinces"
              label="จังหวัด"
              variant="outlined"
              density="compact"
              auto-select-first
              clearable
              :rules="[v => !!v || 'กรุณากรอกจังหวัด']"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.postalCode" label="รหัสไปรษณีย์" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกรหัสไปรษณีย์']"></v-text-field></v-col>
        </v-row>

            <h3 class="text-h6 font-weight-bold mt-8 mb-4 text-green-darken-4 border-bottom pb-2">3. ที่อยู่สำหรับจัดส่งเอกสาร</h3>
        <v-row>
          <v-col cols="12" md="3"><v-text-field v-model="form.sendaddressNo" label="บ้านเลขที่" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกบ้านเลขที่']"></v-text-field></v-col>
          <v-col cols="12" md="3"><v-text-field v-model="form.sendvillageNo" label="หมู่ที่" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกหมู่ที่']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.sendsoi" label="ตรอก/ซอย" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกตรอก/ซอย']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.sendroad" label="ถนน" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกถนน']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.sendsubDistrict" label="ตำบล/แขวง" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกตำบล/แขวง']"></v-text-field></v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.senddistrict" label="อำเภอ/เขต" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกอำเภอ/เขต']"></v-text-field></v-col>
          <v-col cols="12" md="6">
          <v-autocomplete
            v-model="form.sendprovince"
            :items="provinces"
            label="จังหวัด"
            variant="outlined"
            density="compact"
            auto-select-first
            clearable
            :rules="[v => !!v || 'กรุณากรอกจังหวัด']"
          ></v-autocomplete>
        </v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.sendpostalCode" label="รหัสไปรษณีย์" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกรหัสไปรษณีย์']"></v-text-field></v-col>
        </v-row>

        <h3 class="text-h6 font-weight-bold mt-8 mb-4 text-green-darken-4 border-bottom pb-2">4. ข้อมูลบิดาหรือมารดา</h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="form.parentPrefix"
              :items="['นาย', 'นาง', 'นางสาว']"
              label="คำนำหน้า"
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'กรุณากรอกคำนำหน้า']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.parentName" label="ชื่อ-สกุล" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกชื่อ-สกุล']"></v-text-field></v-col>
          <v-col cols="12" md="5">
          <v-text-field
          v-model="form.parentCitizenId"
          v-maska="'#-####-#####-##-#'"
          label="เลขประจำตัวประชาชน"
          variant="outlined"
          density="compact"
          :rules="rules"
        ></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentPosition" label="ตำแหน่ง" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกตำแหน่ง']"></v-text-field></v-col>
          <v-col cols="12" md="6"><v-text-field v-model="form.parentDuration" label="ระยะเวลาปฏิบัติงาน" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกระยะเวลาปฏิบัติงาน']"></v-text-field></v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="form.parentPhone" 
              v-maska="'###-###-####'"
              label="มือถือ (ส่วนตัว)" 
              variant="outlined" 
              density="compact"
              maxlength="12"
              :rules="phoneRules"
            ></v-text-field>
          </v-col>
         <v-col cols="12" md="4">
          <v-text-field 
            v-model="form.parentWorkPhone" 
            v-maska="'###-###-####'"
            label="โทรศัพท์ที่ทำงาน" 
            variant="outlined" 
            density="compact"
            maxlength="12"
            :rules="phoneRules"
          ></v-text-field>
        </v-col>
           <v-col cols="12" md="4"><v-text-field v-model="form.parentDepartment" label="สังกัด" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกสังกัด']"></v-text-field></v-col>
            <v-col cols="12" md="4"><v-text-field v-model="form.parentdistrict" label="อำเภอ/เขต" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกอำเภอ/เขต']"></v-text-field></v-col>
          <v-col cols="12" md="4">
            <v-autocomplete 
              :items="provinces" 
              v-model="form.parentprovince" 
              label="จังหวัด" 
              variant="outlined" 
              density="compact"
              auto-select-first
              clearable
              :rules="[v => !!v || 'กรุณากรอกจังหวัด']"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4"><v-text-field v-model="form.parentpostalCode" label="รหัสไปรษณีย์" variant="outlined" density="compact" :rules="[v => !!v || 'กรุณากรอกรหัสไปรษณีย์']"></v-text-field></v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>
        <div class="d-flex justify-end gap-2">
          <v-btn color="green-darken-4" @click="printPDF">
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
import provinces from '../utils/provinces.js'
import generatePDF from '../utils/printpdf'
import Swal from 'sweetalert2'
import { vMaska } from 'maska/vue'


const formRef = ref(null)


const form = reactive({
  date: '',
  prefix: '',
  fullName: '',
  citizenId: '',
  birthDate: '',
  age: '',
  educationLevel: '',
  gpax: '', 
  grade:'',
  school: '',
  addressNo: '',
  villageNo: '',
  soi: '',
  road: '',
  subDistrict: '',
  district: '',
  province: '',
  postalCode: '',
  sendaddressNo: '',
  sendvillageNo: '',
  sendsoi: '',
  sendroad: '',
  sendsubDistrict: '',
  senddistrict: '',
  sendprovince: '',
  sendpostalCode: '',
  parentPrefix: '',
  parentName: '',
  parentCitizenId: '',
  parentPosition: '',
  parentDuration: '',
  parentDepartment: '',
  parentdistrict: '',
  parentprovince: '',
  parentpostalCode:'',
  parentPhone: '',
  parentWorkPhone: '',
  contestType: '',
  projectTitle: '',
})

onMounted(() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  form.date = `${year}-${month}-${day}`;
}); 
 
watch(() => form.birthDate, (newVal) => {
  if (newVal) {
    const birthDate = new Date(newVal);
    const currentYear = new Date().getFullYear();
    if (!isNaN(birthDate.getFullYear())) {
      form.age = (currentYear + 543) - (birthDate.getFullYear() + 543);
    }
  }
});

const rules = [
  v => !!v || 'กรุณากรอกเลขประจำตัวประชาชน',
  v => (v && v.length === 17) || 'กรุณากรอกให้ครบ 13 หลัก'
]

const phoneRules = [
  v => !!v || 'กรุณากรอกหมายเลขโทรศัพท์',
  v => (v && v.length === 12) || 'กรุณากรอกให้ครบ 10 หลัก'
]

const printPDF = async () => {

  const { valid } = await formRef.value.validate()
  if (!valid) {
    Swal.fire({
      icon: 'error',
      title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      text: 'โปรดตรวจสอบข้อมูลในแบบฟอร์มอีกครั้ง',
      confirmButtonText: 'ตกลง',
    })
    return
  }


try {
  generatePDF(form, imageData, pdfUtils)

  Swal.close()
  Swal.fire({
    icon: 'success',
    title: 'สร้างเอกสารสำเร็จ',
    text: 'เอกสารถูกสร้างเรียบร้อยแล้ว',
  })
}
catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'เกิดข้อผิดพลาด',
    text: 'ไม่สามารถสร้างเอกสารได้',
  })  
}
  

}

</script>


<style scoped>
.border-bottom {
  border-bottom: 2px solid rgb(8, 143, 82);
}
</style>