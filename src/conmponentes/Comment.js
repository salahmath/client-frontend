import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Rate } from "antd";

export default function Basic({ nom, rate, ret }) {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBCard className="shadow-0 border" style={{ backgroundColor: "#f0f2f5" }}>
        <MDBCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <MDBCardImage
src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                alt="avatar"
                width="25"
                height="25"
                // Ajoutez ici la source de l'image de l'avatar si disponible
              />
              <p className="small mb-0 ms-2">{nom}</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="small text-muted mb-0">
                <Rate allowHalf value={ret} />
              </div>
              <MDBIcon
                far
                icon="thumbs-up"
                className="mx-2 fa-xs text-black"
                style={{ marginTop: "-0.16rem" }}
              />
            </div>
          </div>

          <MDBCard className="mb-4">
            <MDBCardBody>
              <p>{rate}</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
