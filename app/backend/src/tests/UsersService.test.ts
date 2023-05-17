// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// const { expect } = chai;
// import { emailLogin, login, token } from './mocks/UsersMock';
// import UsersService from '../services/UsersService';
// import UsersModel from '../database/models/UsersModel';

// chai.use(chaiHttp);

// describe('POST /login, Service', () => {
//   afterEach(() => {
//     sinon.restore();
//   });

//   it('Testa se retorna um token ao fazer login com os dados corretos', async () => {
//     // @ts-ignore
//     sinon.stub(UsersModel, 'findOne').resolves(emailLogin);

//     expect(await UsersService.login(login)).to.be.equal('token');
//   });

// });