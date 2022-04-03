<template>
    <nav class="header">
        <h1 class="main-title"> <v-icon name="hi-menu-alt-3" />Dashboard</h1>
        <div class="group-avatar">
            <div class="avatar-img"><img class="avatar" :src="require('@/assets/imgs/'+photo)"></div>
            <span class="name">{{ name }}</span>
        </div>
    </nav>
</template>

<script>

export default ({
    data() {
        return{
            name: localStorage.getItem('name'),
            photo: localStorage.getItem('photo')
        }
    },
})
</script>
