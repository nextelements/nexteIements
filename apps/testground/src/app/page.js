import { Button } from '@nextelements/components';

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
}