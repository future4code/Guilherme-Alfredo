import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import syled from "styled-components"
import styled from 'styled-components';

const Inputs = styled.input`
  display: flex;
  width: 300px;
  margin-bottom: 10px;
`

class App extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },

      {
        nomeUsuario: 'Guilherme',
        fotoUsuario: 'https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-natural-jalapao-970437844-1000x664.jpg',
        fotoPost: 'https://paperx-dex-staging-uploads.s3.sa-east-1.amazonaws.com/images/txt-07-01.jpg',
      },

      {
        nomeUsuario: 'Marina',
        fotoUsuario: 'https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370-1000x667.jpg',
        fotoPost: 'https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370-1000x667.jpg',
      },
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""

  }

  adicionaPost = () => {

    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost,
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputNome: "",
      valorInputFoto: "",
      valorInputPost: ""
    });

  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

    render() {
      const ListaDeComponentes = this.state.posts.map ((post) =>{
        return (
          <Post key={post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
        )
      })

      return (
        <div className={'app-container'}>
        <Inputs
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
        />
        <Inputs
        value={this.state.valorInputFoto}
        onChange={this.onChangeInputFoto}
        placeholder={"Foto"}
        />
        <Inputs
        value={this.state.valorInputPost}
        onChange={this.onChangeInputPost}
        placeholder={"Post"}
        />

        <button onClick={this.adicionaPost}>Adicionar Post</button>
          {ListaDeComponentes}
        </div>
      );
    }
}

export default App;
