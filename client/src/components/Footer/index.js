import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white' style={{ backgroundColor: 'rgba(116,132,85)' }}>
        <div className='me-5 d-none d-lg-block'>
          <span>Let's Connect</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 bg '>
          <MDBRow className='mt-3 '>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4  ' >
              
                RobinGood Foods
              </h6>
              <p>
              <a href= "" className="btn bg-dark text-white">Meet the Team</a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 '>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pancakes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Baked Goods
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Coffee & Tea
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Merch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                California
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                RobinGoodFoods.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter>
  );
}
