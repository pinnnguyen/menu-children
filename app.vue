<script setup>
const dayInWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật']
const daySelected = ref('')
const age = ref('')
const response = ref()
const loading = ref(false)

const submit = async () => {
  loading.value = true
  response.value = await $fetch('/api/generate', {
    method: 'POST',
    body: {
      age: age.value,
      day: daySelected.value
    }
  })

  loading.value = false
}
</script>

<template>
  <aside class="p-4 my-8 text-center sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700" aria-label="Subscribe to the Flowbite newsletter">
    <h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">Thực đơn cho bé</h3>
    <p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">Chỉ cần nhận độ tuổi & ngày trong tuần sẽ ra một thực đơn hoàn hảo cho bé, hoàn toàn miễn phí.</p>
      <div data-style="clean" class="flex items-end mb-3">
        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false" class="flex flex-col items-center w-full max-w-md mb-3 seva-fields formkit-fields">
          <div class="relative w-full mr-3 formkit-field">
            <label class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chọn độ tuổi cho bé</label>
            <input v-model="age" class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VD: 1 Năm" required="" type="text">
          </div>
          <div class="relative w-full mr-3 formkit-field">
            <label class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chọn ngày trong tuần</label>
            <div class="grid grid-cols-4 gap-4">
              <button @click="daySelected = value" v-for="value in dayInWeek" :class="{'border-blue-500': daySelected === value}" class="px-5 py-3 text-sm font-medium text-center text-white text-black border border-white-200 rounded-lg mt-4">
                {{ value }}
              </button>
            </div>
          </div>
          <button @click="submit" class="formkit-submit mt-6">
            <span class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {{ loading ? 'Đang tạo...' : 'Tạo thực đơn'}}
            </span>
          </button>
        </div>
      </div>
    <p class="whitespace-pre-line text-left">
      {{ response }}
    </p>
  </aside>
</template>
