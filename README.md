# Instruções para realização do teste prático

### Execute o projeto localmente

O código fornecido precisa ser configurado e executado corretamente para que você possa desenvolvê-lo posteriormente.

O Expo mostrará alguns erros quando você tentar executá-lo em um emulador ou dispositivo, corrigir esses erros fazem parte do teste. Depois de corrigi-los, o aplicativo será executado sem qualquer mensagem de erro ou aviso.

### Tasks

* Atualize a versão do EXPO para a última versão disponível : https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
* Corrija o posicionamento do botão "Done/Undone", o mesmo deve ficar posicionado ao lado direto do texto, não abaixo como está sendo apresentado.
* A largura da lista de tarefas está ocupando uma parte muito pequena da tela, além dela estar posicionada ao centro. Altere para que a lista ocupe 90% da tela e seja posicionada na parte superior da tela.
* Ao adicionar muito itens, a lista acaba ficando muito comprida, fazendo com que alguns itens fiquem além da área visível. Adicione um scroll para que isso não ocorra mais.
* Build o aplicativo para o Android no formato .apk.
* [Bônus] Ao fechar o aplicativo a lista é perdida, deseja-se que a lista mantenha os dados mesmo após fechar e reabrir o aplicativo.
 
_Qualquer melhoria de layout ou performance é bem-vinda, fique livre para realizar quaisquer outras alterações. Caso não consiga realizar algumas das tasks não tem problema, explique o motivo ao final desse arquivo (README.md) para que possamos entender o que ocorreu._
 
### Entrega

Adicione o .apk na raiz do projeto.

Faça uma cópia desse projeto para sua conta pessoal do github ou bitbucket, adicione suas alterações, faça o commit e push do código com todas as alterações.

# README #

This project was build using expo, all the documentation can be found at [Expo Docs]
 
[Expo Docs]: https://docs.expo.io

## Requirements

* Node - [Node](https://nodejs.org/en/)
* Expo-Cli - `npm install -g expo-cli`
* Yarn - [Download](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

## Quick start
 
* Execute `yarn`
* Start with `yarn start`

### Opening the app on your phone/tablet

> 👨 You can open the project on multiple devices simultaneously. Go ahead and try it on an iPhone and Android phone at the same time if you have both handy.

* 🍎 On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.
* 🤖 On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo client app and scan the QR code you see in the terminal or in Expo Dev Tools.