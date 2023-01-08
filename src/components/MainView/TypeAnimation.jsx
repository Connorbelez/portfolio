import { TypeAnimation } from 'react-type-animation';

export const ExampleComponent = () => {
  return (
        <div >

            <TypeAnimation
                sequence={[
                    '   I am a Software Developer', // Types 'One'
                    1000, // Waits 1s
                    '   I am Computer Science Student', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    '   I am Computer Science TA & Tutor', // Types 'Three' without deleting 'Two'
                    4000,
                    '   I do Fullstack',
                    2000,
                    '   I do Backend',
                    2000,
                    '   I do Embedded',
                    3000,
                    'I am open to opportunities',
                    4000,

                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                
            />
        </div>
      );

};