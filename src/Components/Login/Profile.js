import React, { useState, useEffect } from 'react'
import { Container, Allitems } from '../Styles/Menu'
import { InnerBox, LogBox } from '../Styles/Sign'
import { AllSecWrap, FormItem } from '../Styles/HomeStyles'
import { getProfile, editProfile } from '../../Service/Api'
import '../../App.css'
import { notyf } from '../Styles/Navstyles';

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    newpassword: "",
    cnewpassword: "",
    oldpassword: "",
  });


  useEffect(() => {
    const getUser = async () => {
      const resp = await getProfile();
      setUser({
        name: resp.data.name,
        phone: resp.data.phone,
        newpassword: "",
        cnewpassword: "",
        oldpassword: ""
      })
    }
    getUser();

  }, [])


  const readinp = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const [submit, showSubmit] = useState(false);
  const [edit, showEdit] = useState(false);

  const handleUpdate = () => {
    if (user.name === "" || user.phone === "") {
      alert("Please enter all details");

    }
    else if (user.newpassword !== user.cnewpassword) {
      alert("Both passwords must be same");
    }
    else {
      showSubmit(!submit);
    }

  }

  const handleSubmit = async () => {
    if (user.oldpassword === "") {
      alert("Please enter your old password");
    }
    else {
      const resp = await editProfile(user);
      notyf.open({
        type: 'info',
        message: resp.data.message
      });
      
      setUser({ ...user, newpassword: "", cnewpassword: "", oldpassword: "" });
      showSubmit(!submit);
      showEdit(!edit);
    }

  }


  return (
    <AllSecWrap>
      <Container>
        <InnerBox>
          <img src="/images/profile.svg" alt="" />


          <div className='profileEdit'>


            <LogBox style={{ padding: '50px 20px' }}>
              <Allitems style={{ marginBottom: '20px' }} >
                <div className='flexSpacebtw'>
                  <h1>Profile Details</h1>
                  {!submit ? <p className='sp-bt profileEdit' onClick={() => {
                    showEdit(!edit);
                  }}    >Edit</p> : ""}

                </div>

              </Allitems>



              {submit ?

                <>
                  <FormItem>
                    <input type="password" name="oldpassword" onChange={readinp} placeholder='Enter old Password' />
                  </FormItem>

                  <FormItem>


                    <button className='mainBtStyle' onClick={handleSubmit} >
                      Submit
                    </button>
                  </FormItem>
                </>
                :
                <div style={{ pointerEvents: edit ? 'auto' : 'none', opacity: edit ? 1 : 0.6 }}>
                  <FormItem>
                    <input type="text" name="name" defaultValue={user?.name} onChange={readinp} />

                  </FormItem>
                  <FormItem>
                    <input type="text" name="phone" defaultValue={user?.phone} onChange={readinp} />

                  </FormItem>




                  <FormItem>
                    <input type="password" name="newpassword" placeholder=' New Password' onChange={readinp} />
                  </FormItem>

                  <FormItem>
                    <input type="password" name="cnewpassword" placeholder=' Confirm new Password' onChange={readinp} />
                  </FormItem>



                  <FormItem>

                    <button className='mainBtStyle' onClick={handleUpdate}>
                      Update
                    </button>
                  </FormItem>
                </div>
              }
            </LogBox>
          </div>

        </InnerBox>
      </Container >
    </AllSecWrap >
  )
}

export default Profile