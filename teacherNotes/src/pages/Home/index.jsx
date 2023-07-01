import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>TeacherNotes</h1>
            </Brand>
            <Header />
            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="Turma 202" /></li>
                <li><ButtonText title="Turma 303" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'Matemática',
                        tags: [
                            { id: '1', name: 'Aula 01 - Soma' },
                            { id: '2', name: 'Aula 02 - Diminuição' }
                        ]
                    }} />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}