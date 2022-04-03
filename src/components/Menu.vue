<template>
    <div class="left-menu-bar">
        <div class="title-menu">System</div>
        <div class="content-menu">
            <ul>
                <li><RouterLink :to="{ path: `/home/` }"><v-icon name="hi-solid-users"/><span>Users</span></RouterLink></li>
            </ul>
        </div>
    </div>
</template>