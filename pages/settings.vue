<script setup>
const tokenGlobal = useCookie('token')

const token = ref('');

watchEffect(() => {
  console.log('token', token.value)
  tokenGlobal.value = token.value
});

</script>

<template>
  <div>
    <h1>Settings</h1>
    <label for="token">Token</label>
    <input v-model="token" name="token" />

    <span>
      State Local token:{{ tokenGlobal }}
    </span>
  </div>
</template>