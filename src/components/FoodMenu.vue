<template>
    <div>
        <div class="side-bar">
            <ul>
                <li>热卖</li>
                <li>热菜</li>
                <li>凉菜</li>
                <li>特价专区</li>
            </ul>
        </div>
        <div class="foods">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:'food-menu',
        data(){
            return{
                menu:[
                    {id:0}
                    ]
            }
        }
    }
</script>

<style>
    .side-bar{

    }
    .foods{

    }
</style>