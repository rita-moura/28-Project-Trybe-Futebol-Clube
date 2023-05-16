import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;

import TeamsModel from '../database/models/TeamsModel';
import TeamsService from '../services/TeamsService';
import { teamById } from './mocks/mocksModel';

chai.use(chaiHttp);

describe('GET /teams, Service', () => {
  afterEach(() => {
    sinon.restore();
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