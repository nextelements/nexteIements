import { StepTree, StepTreeItem } from '@/components/StepTree';
import { Code } from '@/components/Code';

export default function () {

  return (
    <>
      <h1>Install resolve-ui</h1>
      <StepTree>
        <StepTreeItem title="Install">
          To get started, you’ll need to install the necessary dependencies for resolve-ui. In your project directory, run the following command to install the dependencies.
          <Code>
            npm install resolve-ui
          </Code>
        </StepTreeItem>
        <StepTreeItem title="Configure Tailwind">
          Step 2
        </StepTreeItem>
        <StepTreeItem title="Usage">
          Step 3
        </StepTreeItem>
      </StepTree>
    </>
  )
}
