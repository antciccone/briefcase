var PortfolioEditMidInfo = React.createClass({
  componentDidMount(){
    $('select').material_select();
  },

  render: function() {
    var user = this.props.user;
    var portfolio = this.props.portfolio;

    return (
      <div>
        <div className="row about-me-cont">

          <div className="col s12">
            <h1 id="edit-profile-information">Profile Information</h1>
            <div className="row">
              <div className='col s5'>
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="example@example.com"></input>
              </div>
              <div className='col s5 offset-s2'>
                <label htmlFor="resume">Email</label><br/>
                <input id="resume" type="file"></input>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="row mid-bio">
              <div className='col s6'>
                <label htmlFor="looking-for">Looking For</label>
                <textarea id="looking-for" placeholder="example@example.com"></textarea>
              </div>
              <div className='col s6'>
                <label htmlFor="best-at">Best At</label>
                <textarea id="best-at" type="file"></textarea>
              </div>
            </div>
          </div>

          <div class="input-field col s12">
            <select multiple>
                <option value="" disabled selected>Preferred Locations</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <label>Materialize Multiple Select</label>
        </div>

        </div>
      </div>
    );
  }
});
