let assert = require('assert');
let chai = require("chai");
let should = require('chai').should();
let chaiHttp = require("chai-http");
let server=require("../index");
chai.use(chaiHttp);

  describe('/GET Articles ', () => {
    it('it should GET all the Articles', (done) => {
      chai.request(server)
          .get('/articles')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});

describe('/POST Articels', () => {
  it('it should POST a Articles', (done) => {
      let article = {
        "author": "yeap",
        "title": "Congnitive approach in Artificial intelligince",
        "source": "journal",
        "pages": "60-67",
        "date": "2019-10-08T11:00:00.000Z",
      }
     
    chai.request(server)
        .post('/articles/add')
        .send(article)
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});

