import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../data/utils/accordion'
import { useState } from 'react';

const Value = () => {
    const imageUrl = "https://images.pexels.com/photos/10827223/pexels-photo-10827223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <section className="v-warpper">
        <div className="flexCenter paddings innerWidth v-container">

            {/* Left side */}
            <div className="flexColCenter v-left">
                <div className="vimage-container">
                    <img src={imageUrl} />
                </div>
            </div>

            <div className="flexColCenter v-right">
                <div className="flexColStart right-title">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you. <br />
                        We beleive a good blace to live can make your life better
                    </span> 
                </div>

                <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [isExpanded, setIsExpanded] = useState(true);
                            
                            
                            const toggleAccordion = () => {
                                setIsExpanded((prevIsExpanded) => !prevIsExpanded);
                            };

                            return (
                                <AccordionItem
                                    className={`accordionItem ${isExpanded ? 'collaspsd' : 'expanded'}`}
                                    key={i}
                                    uuid={i}
                                    onClick={toggleAccordion}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton
                                            className='flexCenter accordionButton'
                                      
                                        >
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value