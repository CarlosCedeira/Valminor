import React from "react";
import { Row, Col } from "react-bootstrap";

function Comodidades() {
  return (
    <Row className=" flex-grow-1">
      <Col>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
            <p className="mb-0">Calificación general: 4.56</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
            </svg>
            <p className="mb-0">Wifi</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" />
            </svg>
            <p className="mb-0">Toallas de baño</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M280-80v-240h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85h-80q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v240H280Zm-64-320h64v-40h400v40h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm0-200h240-240Z" />
            </svg>
            <p className="mb-0">Ropa de cama</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M240-120v-720h280q100 0 170 70t70 170q0 100-70 170t-170 70H400v240H240Zm160-400h128q33 0 56.5-23.5T608-600q0-33-23.5-56.5T528-680H400v160Z" />
            </svg>
            <p className="mb-0">Parking</p>
          </li>
        </ul>
      </Col>
      <Col>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M237-396h148l169-169.5q11.5-11.44 16.75-25.22T576-620q0-15.5-5.5-29.25T553.91-675l-37.41-37q-11.58-11.5-25.74-17.25-14.15-5.75-29.59-5.75-14.67 0-28.45 5.75T407.5-713L237-544v148Zm261.5-224.5-37-37 37 37Zm-184 147v-38l64.5-63 18.5 18 18 18.5-63 64.5h-38Zm83-83 18 18.5-36.5-36.5 18.5 18ZM484-396h239v-75H559l-75 75ZM56-61v-723q0-50.94 35.03-85.97T177-905h606q50.94 0 85.97 35.03T904-784v448q0 50.94-35.03 85.97T783-215H210L56-61Zm122.5-275H783v-448H177v450l1.5-2Zm-1.5 0v-448 448Z" />
            </svg>
            <p className="mb-0">Reseñas totales: 41</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600H80Zm80-80h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Z" />
            </svg>
            <p className="mb-0">Jardín y patio trasero</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M200-120v-400q-33 0-56.5-23.5T120-600v-212q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v212q0 33-23.5 56.5T280-520v400h-80Zm280 0v-404q-42-20-61-62.5T400-676q0-63 31.5-113.5T520-840q57 0 88.5 50.5T640-676q0 47-19 89.5T560-524v404h-80Zm200 0v-720q66 0 113 47t47 113v240h-80v320h-80Z" />
            </svg>
            <p className="mb-0">Utensilios de cocina</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z" />
            </svg>
            <p className="mb-0">Montaña</p>
          </li>
          <li className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
              }}
            >
              <path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z" />
            </svg>
            <p className="mb-0">Playa</p>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Comodidades;
