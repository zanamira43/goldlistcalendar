<template>
  <v-app>
    <v-app-bar  app  color="cyan" dark flat>
      <v-icon>mdi-calendar</v-icon>
      <v-toolbar-title>Gold List Calendar</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from '@/components/Calendar';

export default {
  name: 'App',

  components: {
    Calendar,
  },

  data: () => ({
    //
  }),
};
</script>
