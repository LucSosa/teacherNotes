import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/LucSosa.png"
                    alt="Foto do usuário" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Lucas Sosa</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}