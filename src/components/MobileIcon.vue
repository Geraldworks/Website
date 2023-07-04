<script>
export default {
    props: ['icon', 'funcs']
}
</script>

<template>
    <div class="d-flex justify-center flex-column align-center" style="min-width: 70px">
        <v-btn :icon="icon" @click="funcs" color=""></v-btn>
        <div style="text-align: center;"><slot></slot></div>
    </div>

</template>