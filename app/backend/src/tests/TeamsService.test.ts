import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
// @ts-ignore
import chaiAsPromised = require('chai-as-promised');
import TeamsModel from '../database/models/TeamsModel';
import TeamsService from '../services/TeamsService';

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('GET /teams, Service', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testa se retorna uma lista com todos os times', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves([]);
    expect(await TeamsService.findAll()).to.be.deep.equal([]);
  });
});
