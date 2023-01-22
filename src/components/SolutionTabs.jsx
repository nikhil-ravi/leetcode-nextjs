"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Solution from "./Solution";

export default function SolutionTabs({ solutions }) {
  return (
    <div className="flex-col w-full mx-auto">
      <Tabs id="custom-animation" value={0}>
        {solutions.length > 1 && (
          <TabsHeader>
            {solutions.map(({ id }) => (
              <Tab key={id} value={id}>
                Method {id + 1}
              </Tab>
            ))}
          </TabsHeader>
        )}
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {solutions.map(({ id, code, docs }) => (
            <TabPanel
              key={id}
              value={id}
              // className="text-primary-800 dark:text-primary-100"
            >
              <Solution code={code} docs={docs} />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
