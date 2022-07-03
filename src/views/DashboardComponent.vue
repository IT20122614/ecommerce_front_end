<template>
  <v-container style="background-color: #C8E6C9;" class="white--text mb-6">
    <center>
      <h2 class="ma-8 orange--text">DASHBOARD</h2>
    </center>
    <v-row>
      <v-col>
        <div>
          <apexChart width="500" type="bar" :options="chartOptions" :series="series"></apexChart>
          
        </div>
      </v-col>
      <v-col>
        <div>
          <apexChart width="500" type="line" :options="chartOptions" :series="series"></apexChart>
      
        </div>
      </v-col>
    </v-row>
    <center>
      <v-btn class="orange white--text" @click="updateData">
            update
      </v-btn>
    </center>

  </v-container>
</template>
<script>
import Vue from "vue";
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexChart', VueApexCharts)

export default {
  name: 'DashboardComponent',
    data(){
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        
        series: [{
          name: 'DashboardComponent',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
    methods: {
      updateData() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    });
      this.series = [{
      data: newData
      }]
    }

    }
};

</script>