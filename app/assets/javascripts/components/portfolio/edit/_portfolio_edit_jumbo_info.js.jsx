var PortfolioEditJumboInfo = React.createClass({

  getInitialState(){
    var userPortfolio = this.props.portfolio;
    return { full_name: "userPortfolio.full_name" }
  },

  handleEdit: function(event){
    var stateToUpdate = {};
    var fieldToUpdate;
    this.setState({full_name: event.target.value});
    if(event.target.id == "edit-full-name") { stateToUpdate.full_name = event.target.value; fieldToUpdate = "full_name" };
    if(event.target.id == "edit-title") { stateToUpdate.full_name = event.target.value; fieldToUpdate = "title" };
    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="container">
          <div className='portfolio-name-container'>
            <div className="show-name-holder">
              <div className="col s12">
                <div className="row">
                  <div className='col s4'>
                  </div>
                  <div className="col s4">
                      <input type="text" id="edit-full-name" defaultValue={portfolio.full_name} onChange={this.handleEdit}></input>
                  </div>
                  <div className="col s4 offset-s4">
                      <input type="text" id="edit-title" defaultValue={portfolio.title} onChange={this.handleEdit}></input>
                  </div>
                  <ul className='pull-right' >
                    <li><button className='title btn transparent resume-btn'>Published</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
