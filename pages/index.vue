<script setup lang="ts">

const tokenGlobal = useCookie('token')
const enviromentpublictest = useRuntimeConfig().public

</script>

<template>
  <div>
    <h1>Home</h1>
    <h4>State Local token</h4>
    <span>
      {{ tokenGlobal }}
    </span>
    <br />
    <h4>Envirioment public test</h4>
    <span>{{ enviromentpublictest.test }}</span>
  </div>
</template>