<template>
<div>
    <nav class="container">
        <!-- navigation bar -->
        <v-toolbar flat>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" v-if="['home', 'login', 'register', 'homeproducts'].indexOf($route.name) === -1"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">ri</span>
                <span>ght</span>
                
            </v-toolbar-title>
            <!-- space between nav icon and home btn -->
            <v-spacer></v-spacer>
            <!-- Home page btn -->
            <router-link to="/displaycate" style="textDecoration: none;" v-if="['home', 'login', 'register','homeproducts'].indexOf($route.name) === -1">
                <v-btn text color="grey">
                <span>Home</span>
                <v-icon right>home</v-icon>
            </v-btn>
            <!-- about page btn -->
            </router-link>
            <router-link to="/about" style="textDecoration: none;" v-if="['home', 'login', 'register','homeproducts'].indexOf($route.name) === -1">
                <v-btn text color="grey">
                <span>About</span> 
            </v-btn>
            </router-link>
        </v-toolbar>

        <!-- setting nav icon  -->
        <v-navigation-drawer app temporary v-model="drawer" class="primary">
            <v-avatar class="ma-15" size="76" color="indigo">
                <v-icon large dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <span class="white--text ml-12">{{username}}</span>
            <v-list>
                <v-list-item router to="/displaycate">
                    <!-- <div v-if="(['ROLE_USER'].indexOf(usertype)) && (['EditProducts'].indexOf(key)) === -1"> -->
                    <v-list-item-action>
                        <v-icon class="white--text">category</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Products</v-list-item-title>
                    </v-list-item-content>
                    <!-- </div> -->

                </v-list-item>
                <v-list-item router to="/category" v-if="['ROLE_USER'].indexOf(usertype) === -1">
                    <!-- <div v-if="(['ROLE_USER'].indexOf(usertype)) && (['EditProducts'].indexOf(key)) === -1"> -->
                    <v-list-item-action>
                        <v-icon class="white--text">dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Add Products</v-list-item-title>
                    </v-list-item-content>
                    <!-- </div> -->

                </v-list-item>
                <v-list-item router to="/displayedit"  v-if="['ROLE_USER'].indexOf(usertype) === -1">
                    <!-- <div v-if="(['ROLE_USER'].indexOf(usertype)) && (['EditProducts'].indexOf(key)) === -1"> -->
                    <v-list-item-action>
                        <v-icon class="white--text">edit</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Edit Products</v-list-item-title>
                    </v-list-item-content>
                    <!-- </div> -->

                </v-list-item>
                <v-list-item router to="/dashboard">
                    <!-- <div v-if="(['ROLE_USER'].indexOf(usertype)) && (['EditProducts'].indexOf(key)) === -1"> -->
                    <v-list-item-action>
                        <v-icon class="white--text">inventory_2</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Dashboard</v-list-item-title>
                    </v-list-item-content>
                    <!-- </div> -->

                </v-list-item>
                
                <!-- logout btn -->
                <v-spacer class="my-4"></v-spacer>
                <v-btn text color="white" @click="logout">
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
            <!-- snack Bar -->
            
            <!-- end snack bar -->
            </v-list>
        </v-navigation-drawer>
    </nav>
    <v-snackbar color="success" v-model="snackbar" top width="80%"> {{ text }}
                <template v-slot:action="{ attrs }">
                <v-btn color="white" text v-bind="attrs" @click="closeSnackBar" >
            Close
                </v-btn>
                </template>
            </v-snackbar>
    </div>
    
</template>

<script>

export default {
    data(){
        return{
            // assign false value to the drawer variable
            drawer: true,
            links: [
                {icon: 'dashboard', text: 'Products', route: '/displaycate'},
                {icon: 'category', text: 'Add Products', route: '/category'},
                {icon: 'edit', text: 'Edit Products', route: '/displayedit'},
                {icon: 'inventory_2', text: 'Dashboard', route: '/dashboard'}
                
                
            ],
            // get session details and assign to the variable
            username: this.$cookie.get('userid'),
            snackbar: false,
            text: `LOGOUT SUCCESSFULLY`,
            usertype: localStorage.getItem('role')
        }
    },
    methods: {
        // logout method
        logout(){
            //alert(this.$cookie.get('userid') + ' user logout');
            this.snackbar = true;
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            
        },
        closeSnackBar() {
         this.snackbar = false;
         this.$router.push('/');
      }
    }
}
</script>