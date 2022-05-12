const Dashboard = ()=>{

  return(
    <body class="bg-light body">
      <div class="row">
        <div class="col-md-10 col-11 mx-auto">
          <nav aria-label="breadcrumb"class="mb-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item "><a href="./login">Login</a></li>
              <li class="breadcrumb-item "><a href="./userdashboard">UserDashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">AddReview</li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-lg-3 col-md-4 d-md-block">
              <div class="card bg-common card-left">
                <div class="card-body">
                  <nav class="nav flex-column">
                    {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
                    <a class="nav-link active"aria-current="page" href="./addplatform">AddPlatform</a>
                    <a class="nav-link " href="./manageplatform">ManagePlatform</a>
                    <a class="nav-link" href=".manageuser">ManageUser</a>
                  </nav>
                 </div>
               </div>
                </div>
                <div class="card-body tab-content border-0">
                 <div class="tab-pane active" id="addplatform">
                   <h2>this is the add platform</h2>
                 </div>
                 <div class="tab-pane active" id="manageplatform">
                   <h2>this is the manageplatform</h2>
                 </div> <div class="tab-pane active" id="manageuser">
                   <h2>this is the manageuser</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
export default Dashboard;