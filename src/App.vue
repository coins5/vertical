<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app stateless>
      <v-container>
        <v-row>
          <v-col>
            <v-btn text @click="logout"> <v-icon left>mdi-exit-to-app</v-icon> Salir</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-badge
              bordered
              color="accent"
              content="6"
              overlap
            >
              <v-btn icon>
                <v-icon>mdi-bell-outline</v-icon>
              </v-btn>
            </v-badge>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col>
            <v-avatar size="125">
              <v-img contain :src="user.picture.large"/>
            </v-avatar>
            <div>
              <br />
              <div class="subtitle-1">
                {{user.name.first}} {{user.name.last}}
              </div>
              <div class="overline success--text">{{userType}}</div>
            </div>
            <br />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <div>175</div>
            <div class="overline success--text mt-2">Talla</div>
          </v-col>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-col class="text-center">
            <div>75</div>
            <div class="overline success--text mt-2">Peso</div>
          </v-col>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-col class="text-center">
            <div>25</div>
            <div class="overline success--text mt-2">Edad</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="title mt-8">Tus metas de la semana</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Planchas
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <div class="caption text-right">40/80</div>
          </v-col>
          <v-col cols="12" style="margin-top: -20px;">
            <v-progress-linear value="50" rounded height="10"></v-progress-linear>
          </v-col>
        </v-row>

        <v-divider
          class="ma-4"
        ></v-divider>

        <v-row>
          <v-col>
            Sentadillas
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <div class="caption text-right">40/80</div>
          </v-col>
          <v-col cols="12" style="margin-top: -20px;">
            <v-progress-linear value="42" rounded height="10"></v-progress-linear>
          </v-col>
        </v-row>

        <v-divider
          class="ma-4"
        ></v-divider>

        <v-row>
          <v-col>
            Planks
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <div class="caption text-right">60/90</div>
          </v-col>
          <v-col cols="12" style="margin-top: -20px;">
            <v-progress-linear value="67" rounded height="10"></v-progress-linear>
          </v-col>
          <br />
          <br />
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app dense flat v-show="$route.name !== 'Login'">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Vertical</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme()">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  mounted () {
    fetch('https://randomuser.me/api/?nat=ES')
      .then(response => response.json())
      .then(body => {
        this.user = body.results[0]
        this.drawer = true
      })
  },
  computed: {
    userType () {
      return 'Trainer'
    }
  },
  data: () => ({
    user: {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Akseli',
        last: 'Hatala'
      },
      location: {
        street: {
          number: 1865,
          name: 'Rautatienkatu'
        },
        city: 'Loimaa',
        state: 'Åland',
        country: 'Finland',
        postcode: 39452,
        coordinates: {
          latitude: '-8.2305',
          longitude: '-30.3371'
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland'
        }
      },
      email: 'akseli.hatala@example.com',
      login: {
        uuid: '0252a7f5-1e62-4611-8225-db0cd38cb894',
        username: 'bluefrog883',
        password: 'bigmoney',
        salt: 'h6AjygeV',
        md5: '667fce8c2fd7fde3283d52e28b5d6fec',
        sha1: 'a84b41a9d99b740eefffb8756b227bd71312f0a0',
        sha256: '1efa1195cddd1034299833cad20bc63d8b0304dabb0795d7f83d86417093c4b2'
      },
      dob: {
        date: '1983-05-31T16:26:32.945Z',
        age: 37
      },
      registered: {
        date: '2002-05-09T06:46:26.546Z',
        age: 18
      },
      phone: '08-257-756',
      cell: '042-603-61-69',
      id: {
        name: 'HETU',
        value: 'NaNNA579undefined'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/78.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/78.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/78.jpg'
      },
      nat: 'FI'
    },
    drawer: true
  }),
  methods: {
    logout () {
      this.drawer = false
      this.$router.push('/login')
    },
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
