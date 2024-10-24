import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Sparkle } from 'lucide-react';
import { Separator } from './components/ui/separator';

const Artifact = () => {
  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkle />
          Artifact Template
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-relaxed">
        <p>
          Save and remix your Claude Artifacts with this template. Simply paste
          your Artifact into `App.tsx` and export it as default with:
          <code> export default Artifact as App;</code>
        </p>
        <Separator className="my-4" />
        This template supports:
        <ul className="list-disc pl-5 ">
          <li>
            <a
              href="https://tailwindcss.com/"
              className="text-blue-600 visited:text-purple-600 underline underline-offset-2"
            >
              TailwindCSS
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              className="text-blue-600 visited:text-purple-600 underline underline-offset-2"
            >
              shadcn/ui
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              className="text-blue-600 visited:text-purple-600 underline underline-offset-2"
            >
              Lucide Icons
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Artifact as App;
