import resume, { moduletext } from '../resume.model'
import Prism from 'prismjs';
import 'prismjs/components/prism-json'

export default function Page() {
    const html = Prism.highlight(JSON.stringify(resume, null, 2), Prism.languages['json'], 'json')
    const jshtml = Prism.highlight(moduletext, Prism.languages.javascript, 'javascript')
    return (
        <div className="flex">
            <div className="mockup-code m-4 text-sm">
                <pre>
                    <code className="language-js"
                        dangerouslySetInnerHTML={{
                            __html: jshtml,
                        }} />
                </pre>
            </div>
        </div>
    )
  }