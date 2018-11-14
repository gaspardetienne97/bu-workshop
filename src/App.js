import React, { Component } from 'react';
import redhatlogo from './images/redhatlogo.png';
import './App.css';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { Nav, NavList, NavItem, NavVariants } from '@patternfly/react-core';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>BU-Workshop</h1>
          <img src={redhatlogo} alt="Red Hat logo" className="redHatLogo"/>
        </header>
        <div className="mainSection">
          <Nav>
            <NavList>
              <div>Section 1</div>
              <NavItem>Title 1
	      </NavItem>
              <NavItem>Title 2
	      </NavItem>
              <NavItem>Title 3
	      </NavItem>
              <NavItem>Title 4
	      </NavItem>
            </NavList>
            <NavList>
              <div>Section 2</div>
              <NavItem>Title 1
	      </NavItem>
              <NavItem>Title 2
	      </NavItem>
              <NavItem>Title 3
	      </NavItem>
              <NavItem>Title 4
	      </NavItem>
            </NavList>
          </Nav>
         
	 <Gallery gutter='md'>
	 	<GalleryItem>
	    		<Card>
			<CardBody>Hello
				<CardHeader>Hello World
				</CardHeader>
			</CardBody>
			</Card>
		</GalleryItem>
		<GalleryItem>
                	<Card><CardBody>Hello</CardBody></Card>
		</GalleryItem>
		<GalleryItem>
			<Card><CardBody>Hello</CardBody></Card>
		</GalleryItem>
		<GalleryItem>
			<Card><CardBody>Hello</CardBody></Card>
		</GalleryItem>
		<GalleryItem>
			<Card><CardBody>Hello</CardBody></Card>
		</GalleryItem>                                 
		<GalleryItem>
			<Card><CardBody>Hello</CardBody></Card>
		</GalleryItem>                                 
	</Gallery>
	</div>
	</div>
);
}
}

export default App;
