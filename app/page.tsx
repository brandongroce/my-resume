import Image from 'next/image'
import resume from './resume.model'
import { Header, Section, About, Skill, Experience, Education, Activity, Reference } from './components'

// Bumping node to version 22 LTS
export default function Home() {
  return (
    <div className="bg-gray-100 font-poppins">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <Header {...resume} />
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <About />
                <Section id="skillsSection" title={resume.sections.skills.title}>
                  {resume.sections.skills.content?.map( (skill, i) => {
                    let key = "skill" + i
                    return (<Skill key={key} {...skill} />)
                  })}
                </Section>
                <Section id="experienceSection" title={resume.sections.experience.title}>
                  {resume.sections.experience.content?.map( (experience, i) => {
                    let key = "experience" + i
                    return (<Experience key={key} {...experience} />)
                  })}
                </Section>
                <Section id="educationSection" title={resume.sections.education.title}>
                    <Education {...resume.sections.education.content} />
                </Section>
                <Section id="activitySection" title={resume.sections.activities.title}>
                  {resume.sections.activities.content?.map( (activity, i) => {
                    let key = "activity" + i
                    return (<Activity key={key} {...activity} />)
                  })}
                </Section>
                {/* <Section id="referenceSection" title={resume.sections.references.title}>
                  {resume.sections.references.content?.map( (reference, i) => {
                    let key = "reference" + i
                    return (<Reference key={key} {...reference} />)
                  })}
                </Section> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
