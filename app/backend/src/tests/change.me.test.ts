import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';
import { teams } from './mocks/mocksModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /teams', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Caso de sucesso, retorna corretamente a lista de times com status 200', async () => {

    sinon.stub(TeamsModel, 'findAll').resolves();

    const res = await chai.request(app).get('/teams');

    expect(res).to.have.status(200);
    expect(res.body).to.deep.equal(teams);
  });
});

