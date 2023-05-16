import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import { app } from '../app';
import { id, teams } from './mocks/mocksModel';
const { expect } = chai;
import TeamsService from '../services/TeamsService';

chai.use(chaiHttp);

describe('GET /teams, Model', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  it('Testa se retorna uma lista com todos os times', async () => {
    sinon.stub(TeamsService, 'findAll').resolves(teams);

    chaiHttpResponse = await chai.request(app).get('./teams');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teams);
  });

  it('Testa se retorna o time correto, buscando pelo id', async () => {
    sinon.stub(TeamsService, 'findById').resolves();

    chaiHttpResponse = await chai.request(app).get('./teams/1');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teams[0]);
  })

});

