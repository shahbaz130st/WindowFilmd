const SplashFunctions = {
    timeOut: function (props) {
        setTimeout(() => { props.navigation.navigate("Landing") }, 3000)
    },
}

export default SplashFunctions;
