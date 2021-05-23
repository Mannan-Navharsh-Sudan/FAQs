import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'IS COVID-19 WORSE THAN FLU?',
      answer: 'COVID-19 has a higher rate of severe disease and mortality in nearly every age group, compared with influenza (flu).John Hopkins Bloomberg School of Public Health reported that “COVID-19 has killed more people in the US than flu has in the last five years.',
      open: false
    },
    {
      question: 'HOW DOES COVID-19 COMPARE TO OTHER PUBLIC HEALTH THREATS?',
      answer: 'This depends very much on where people live and how old they are, with some parts of the world hit harder than others, and some age groups being affected more, such as older people. However, even in countries where the COVID-19 death rate seems relatively low, the indirect impact on reduced health services, vaccine supply shortages, and reluctance to seek medical treatment for fear of infection is having a drastic impact and putting tens of millions of people at risk – including children and newborns.',
      open: false
    },
    {
      question: 'HOW EFFECTIVE ARE MASKS AND DO THEY ALSO NEED TO COVER MY NOSE?',
      answer: 'Mask wearing is a very simple and effective way to reduce transmission and save lives. The degree of protection depends on the type of mask, how well they worn and on other factors such as the behaviour of people wearing them and the behaviour of air droplets in different settings. Masks alone are not enough to fully protect someone from the virus, but they still have an essential role to play in protecting high risk individuals, such as frontline health care workers. For most people the greatest benefit lies not in protecting the wearer, but those around them. When combined with other safety measures like physical distancing and practicing good hygiene, they are a very effective tool with little to no disruption to normal life.',
      open: false
    },
    {
      question: ' WHY DO GOVERNMENTS BENEFIT FROM HELPING TO ENSURE OTHER COUNTRIES ACCESS VACCINES?',
      answer: 'Ensuring COVID-19 vaccines reach people in the world’s poorest countries isn’t just about being charitable or acting on a moral imperative; it’s also in the best interest of every country to do so. The pandemic started in Wuhan, China and spread to 180 countries within three months. That means if the virus is circulating in one country, the rest of the world remains at risk.',
      open: false
    },
    {
      question: 'WOULD IT BE POSSIBLE TO ACHIEVE HERD IMMUNITY WITHOUT VACCINES?',
      answer: 'Historically, the most successful way to achieve herd immunity is actually through mass vaccination. This is a much safer route as the alternative is for roughly 60% of the population to be infected with COVID-19 which essentially means leaving the virus unchecked.',
      open: false
    },
    {
      question: 'HOW CAN WE TRUST VACCINES THAT HAVE BEEN DEVELOPED SO FAST?',
      answer: 'COVID-19 vaccines have been developed and produced in record time, but it’s also involved unprecedented levels of funding and global cooperation to tackle a global threat. So far, all approved COVID-19 vaccines have undergone large clinical trials with rigorous safety protocols, and without major safety concerns raised.',
      open: false
    },
    {
      question: 'WHAT ARE THE RISKS OF RE-INFECTION?',
      answer: 'As with other coronaviruses, such as those that cause the common cold, SARS-CoV-2 can reinfect people. There have been multiple reports of reinfection, including a 25-year-old man in the US who tested positive twice. The Lancet reported that “the second infection was symptomatically more severe than the first.”Antibodies are only one part of the vast, complex immune response that is set in motion when a person becomes infected with a virus like SARS-CoV-2 so having antibodies isn’t enough to guarantee long-term protection.',
      open: false
    },
    {
      question: 'IS REGULARLY WASHING MY HANDS ENOUGH TO PROTECT ME?',
      answer: 'Even though regularly washing your hands is very important, as with masks it is not enough on its own. Public health guidelines all work in tandem to prevent the spread of germs.',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;