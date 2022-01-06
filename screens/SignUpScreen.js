import React, { useState } from "react";
import WarningCovid from "../components/WarningCovid";
import authActions from "../redux/actions/authActions";
import { connect } from "react-redux";
// import GoogleLogin from "react-google-login";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Picker,
    TextInput
  } from "react-native";


const countries = [
  "Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bielorrusia",
  "Birmania",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Catar",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Colombia",
  "Comoras",
  "Corea del Norte",
  "Corea del Sur",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Eritrea",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estados Unidos",
  "Estonia",
  "Etiopía",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Ghana",
  "Granada",
  "Grecia",
  "Guatemala",
  "Guyana",
  "Guinea",
  "Guinea ecuatorial",
  "Guinea-Bisáu",
  "Haití",
  "Honduras",
  "Hungría",
  "India",
  "Indonesia",
  "Irak",
  "Irán",
  "Irlanda",
  "Islandia",
  "Islas Marshall",
  "Islas Salomón",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kirguistán",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letonia",
  "Líbano",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Madagascar",
  "Malasia",
  "Malaui",
  "Maldivas",
  "Malí",
  "Malta",
  "Marruecos",
  "Mauricio",
  "Mauritania",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Noruega",
  "Nueva Zelanda",
  "Omán",
  "Países Bajos",
  "Pakistán",
  "Palaos",
  "Palestina",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Polonia",
  "Portugal",
  "Reino Unido",
  "República Centroafricana",
  "República Checa",
  "República de Macedonia",
  "República del Congo",
  "República Democrática del Congo",
  "República Dominicana",
  "República Sudafricana",
  "Ruanda",
  "Rumanía",
  "Rusia",
  "Samoa",
  "San Cristóbal y Nieves",
  "San Marino",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Santo Tomé y Príncipe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Siria",
  "Somalia",
  "Sri Lanka",
  "Suazilandia",
  "Sudán",
  "Sudán del Sur",
  "Suecia",
  "Suiza",
  "Surinam",
  "Tailandia",
  "Tanzania",
  "Tayikistán",
  "Timor Oriental",
  "Togo",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turkmenistán",
  "Turquía",
  "Tuvalu",
  "Ucrania",
  "Uganda",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Yibuti",
  "Zambia",
  "Zimbabue",
];

const SignUpScreen = (props) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePhoto: "",
    vaccination: "",
    country: "",
  });

  const [errorInput, setErrorInput] = useState({});

//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener("mouseenter", Swal.stopTimer);
//       toast.addEventListener("mouseleave", Swal.resumeTimer);
//     },
//   });

  const inputHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

//   const responseGoogle = (response) => {
//     let googleUser = {
//       firstName: response.profileObj.givenName,
//       lastName: response.profileObj.familyName,
//       email: response.profileObj.email,
//       password: response.profileObj.googleId,
//       profilePhoto: response.profileObj.imageUrl,
//       vaccination: "Not yet",
//       country: "Argentina",
//       google: true,
//     };
//     props
//       .signUp(googleUser)
//       .then((response) => {
//         if (response.data.success) {
//           Toast.fire({
//             icon: "success",
//             title: "Your account has been created!",
//           });
//         } else {
//           setErrorInput(response.data.error);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         Toast.fire({
//           icon: "error",
//           title: "Something went wrong! Come back later!",
//         });
//       });
//   };

  const submitForm = (e) => {
    e.preventDefault();
    // let info = Object.values(newUser).some((infoUser) => infoUser === "");
    // if (info) {
    //   Toast.fire({
    //     icon: "error",
    //     title: "There are fields incomplete, please complete them.",
    //   });
    // } else {
    //   props
    //     .signUp(newUser)
    //     .then((response) => {
    //       if (response.data.success) {
    //         Toast.fire({
    //           icon: "success",
    //           title: "Your account has been created!",
    //         });
    //       } else if (response.data.errors) {
    //         setErrorInput({});
    //         response.data.errors.map((error) =>
    //           setErrorInput((messageError) => {
    //             return {
    //               ...messageError,
    //               [error.path]: error.message,
    //             };
    //           })
    //         );
    //       } else {
    //         Toast.fire({
    //           icon: "error",
    //           title: "That email has already been used! Try with another one.",
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       Toast.fire({
    //         icon: "error",
    //         title: "We are having technical difficulties! Come back later!",
    //       });
    //     });
    // }
  };

  return (
    <View>
      
      <View>
        <WarningCovid/>

        <View>
          <View
            // style={{
            //   backgroundImage: `URL(./assets/mt-logo.png)`,
            // }}
          ></View>
          <View>
            <View>
              <View>
                <TextInput
                
                  type="text"
                  onChange={inputHandler}
                  name="firstName"
                  placeholder="Type your first name here"
                ></TextInput>
              </View>
              <View>
                <TextInput
                  
                  type="text"
                  onChange={inputHandler}
                  name="lastName"
                  placeholder="Type your last name here"
                ></TextInput>
              </View>
              <View>
                <TextInput
                  
                  type="email"
                  onChange={inputHandler}
                  name="email"
                  placeholder="Type your email@email.com"
                ></TextInput>
              </View>
              <View>
                <TextInput
                  
                  type="password"
                  onChange={inputHandler}
                  name="password"
                  placeholder="Type your new password here"
                ></TextInput>
              </View>
              <View>
                <TextInput
                  
                  type="url"
                  onChange={inputHandler}
                  name="profilePhoto"
                  placeholder="Paste your url profile image here"
                ></TextInput>
              </View>
              <View>
                <Picker
                  onChange={inputHandler}
                  name="vaccination"
                  
                >
                  <Picker.Item value="null" label="Are you vaccinated?"/>
                  <Picker.Item value="Not yet" name="vaccination" label="Not yet"/>
                    
                  
                  <Picker.Item value="A dose" name="vaccination" label="A dose"/>
                    
                  
                  <Picker.Item value="Two doses" name="vaccination" label="Two doses"/>
                    
                  
                  <Picker.Item value="More than two doses" name="vaccination" label="More than two doses"/>
                    
                  
                </Picker>
              </View>
              <View>
                <Picker
                  onChange={inputHandler}
                  name="country"
                  
                >
                  <Picker.Item value="null" label="Select your country"/>
                  {countries.map((country) => {
                    return (
                      <Picker.Item value={country} name="country" label="{country}"/>
                        
                      
                    );
                  })}
                </Picker>
              </View>
              <View>
                {/* <button
                  className="btn-submit"
                  onClick={(e) => {
                    submitForm(e);
                  }}
                >
                  Sign Up{" "}
                </button> */}
                {/* <GoogleLogin
                  clientId="151507160802-aibp2rjrlnqkqvoopup3p5vbr9pa5ecp.apps.googleusercontent.com"
                  buttonText="Sign Up With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                /> */}
              </View>
              {/* <NavLink
                style={{ color: "#ff9240", textDecoration: "none" }}
                to="/signin"
              > */}
                {/* <button className="btn-submit sign-call-action">
                  Already have an account? Sign In now!
                </button> */}
              {/* </NavLink> */}
            </View>
          </View>
        </View>
        <View>
          <View>
            {/* <BackCities /> */}
          </View>
        </View>
      </View>
     
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.name,
  };
};

const mapDispatchToProps = {
  signUp: authActions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);