<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list
          subheader
          two-line
        >
          <h1 class="text--secondary mb-3">Orders</h1>
          <v-list-tile
            avatar
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :to="`/ad/${order.adId}`"
                class="primary"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    orders: [
      {
        id: 'fds3',
        name: 'Vlad',
        phone: '8-921-121-12-12',
        adId: '123',
        done: false
      }
    ]
  }),
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
