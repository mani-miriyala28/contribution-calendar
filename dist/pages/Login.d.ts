interface LoginProps {
    setUsername: (username: string) => void;
    setToken: (token: string) => void;
}
declare const Login: ({ setUsername, setToken }: LoginProps) => import("react/jsx-runtime").JSX.Element;
export default Login;
