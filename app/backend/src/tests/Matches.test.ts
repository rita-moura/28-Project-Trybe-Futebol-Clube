import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { matches } from './mocks/MatchesMock';
import MatchesService from '../services/MatchesService';
const { expect } = chai;


chai.use(chaiHttp);

describe('GET /matches', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testa re retorna lista das partidas', async () => {
    // @ts-ignore
    sinon.stub(MatchesService, 'findAll').resolves(matches);

    const result = await chai.request(app).get('/matches');

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(matches);
  });

});
