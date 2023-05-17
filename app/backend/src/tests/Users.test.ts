import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
const { expect } = chai;
import { invalidValues, login, loginInvalid } from './mocks/UsersMock';
import UsersService from '../services/UsersService';

chai.use(chaiHttp);

describe('POST /login, Model', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testa se retorna um token ao fazer login com os dados corretos', async () => {
    // @ts-ignore
    sinon.stub(UsersService, 'login').resolves('token');

    const result = await chai.request(app).post('/login')
      .send(login);

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal({token: 'token'});
  });

  it('Testa se retorna status 400 caso não contenha email ou senha', async () => {
    const result = await chai.request(app).post('/login')
      .send(loginInvalid);

    expect(result.status).to.be.equal(400);
  });

  it('Testa se retorna status 401, para dados incorretos', async () => {
    const result = await chai.request(app).post('/login')
      .send(invalidValues);

    expect(result.status).to.be.equal(401);
  })

});

