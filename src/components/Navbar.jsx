import styled from 'styled-components';

import LogoImg from '/assets/img/logo.png';
import SearchImg from '/assets/img/search.png';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
    a {
        text-decoration: none;
        background: transparent;
        color: white;
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default function Navbar() {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={LogoImg} />
                    <List>
                        <ListItem>
                            <a href="#">Home</a>
                        </ListItem>
                        <ListItem>
                            <a href="#studio">Studio</a>
                        </ListItem>
                        <ListItem>
                            <a href="#works">Works</a>
                        </ListItem>
                        <ListItem>
                            <a href="#contact">Contact</a>
                        </ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={SearchImg} />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
}
