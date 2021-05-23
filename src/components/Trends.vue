<template>
  <div>
      <div class="trend">{{trend}}</div>
      <div class="tweets pt-2">{{tweets}}</div>
  </div>
</template>

<script>
export default {
    props:{
        trend:{
            type: String,
            default: ""
        },
        tweets: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
    .trend {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #333333;
    }

    .tweets {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #828282;
    }
</style>