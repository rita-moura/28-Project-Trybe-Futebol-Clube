import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teamById, teams } from './mocks/TeamsMock';
const { expect } = chai;
import TeamsModel from '../database/models/TeamsModel';
import TeamsService from '../services/TeamsService';

chai.use(chaiHttp);

describe('GET /teams', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testa se retorna uma lista com todos os times', async () => {
    // @ts-ignore
    sinon.stub(TeamsModel, 'findAll').resolves(teams);

    const result = await chai.request(app).get('/teams');

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(teams);
  });

  it('Testa se retorna o time correto, buscando pelo id', async () => {
    // @ts-ignore
    sinon.stub(TeamsModel, 'findByPk').resolves(teams[0]);

    const result = await chai.request(app).get('/teams/1');

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(teams[0]);
  });

  it('Testa se retorna uma lista com todos os times', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves([]);
    
    expect(await TeamsService.findAll()).to.be.deep.equal([]);
  });

  it('Testa se retorna o time correto, bucando pelo id', async () => {
    // @ts-ignore
    sinon.stub(TeamsModel, 'findByPk').resolves(teamById);

    expect(await TeamsService.findById(1)).to.be.deep.equal(teamById);
  });
});


