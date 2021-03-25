import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Graph } from '../../src';
import { Args, BaseStory } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { IGraphProps } from '../../src/components/graph/Graph.types';

const meta: Meta = {
  title: 'Graph',
  component: Graph,
};

export default meta;

interface ITemplateArgs extends BaseStory<Args, StoryFnReactReturnType> {
  graphProps: IGraphProps
}

const Template: Story<ITemplateArgs> = (args: ITemplateArgs) => (
  <Graph {...args.graphProps} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Basic: Story<ITemplateArgs> = Template.bind({});
Basic.args = {
  graphProps: {
    id: "graph",
    nodes: [{ id: "Fluent Graph" }, { id: "React" }, { id: "D3" }],
    links: [
      { source: "Fluent Graph", target: "React" },
      { source: "Fluent Graph", target: "D3" },
    ],
  }
};

export const Styled: Story<ITemplateArgs> = Template.bind({});
Styled.args = {
  graphProps: {
    id: "graph",
    nodes: [{ id: "Fluent Graph" }, { id: "React" }, { id: "D3" }],
    links: [
      { source: "Fluent Graph", target: "React" },
      { source: "Fluent Graph", target: "D3" },
    ],
    nodeConfig: {
      nodeStyle: {
        fill: "skyblue"
      },
      labelStyle: {
        fill: "darkgray",
        fontSize: 12
      }
    },
    linkConfig: {
      lineStyle: {
        stroke: "deepskyblue"
      }
    }
  }
};

export const Loop: Story<ITemplateArgs> = Template.bind({});
Loop.args = {
  graphProps: {
    id: "graph",
    nodes: [{ id: "A" }, { id: "B1" }, { id: "B2" }, { id: "C" }],
    links: [
      { source: "A", target: "B1" },
      { source: "A", target: "B2" },
      { source: "B1", target: "C" },
      { source: "B2", target: "C" },
    ]
  }
};

export const Complex: Story<ITemplateArgs> = Template.bind({});
Complex.args = {
  graphProps: {
    id: "graph",
    nodes: [
      { id: "Mark 8", label: "Mark 8" },
      { id: "Aerial", label: "Aerial" },
      { id: "GIS Mapping", label: "GIS Mapping" },
      { id: "Survey Intelligence", label: "Survey Intelligence" },
      { id: "Flight Operations", label: "Flight Operations" },
      { id: "Structual Integrity", label: "Structual Integrity" },
      { id: "Spaces", label: "Spaces"},
      { id: "Digital Surfaces", label: "Digital Surfaces" },
      { id: "3D Modeling", label: "3D Modeling" },
      { id: "Partners", label: "Partners" },
      { id: "Geothermal", label: "Geothermal" },
      { id: "United", label: "United" },
      { id: "Delta" , label: "Delta"},
      { id: "Swiftly", label: "Swiftly" },
      { id: "Data Visualization", label: "Data Visualization" },
      { id: "Fjord", label: "Fjord" },
      { id: "Altas", label: "Altas" },
      { id: "Construction Operations Reliability" , label: "Construction Operations Reliability"},
      { id: "Athena" , label: "Athena"},
      { id: "Elements", label: "Elements" },
      { id: "Juno", label: "Juno" },
      { id: "Milk", label: "Milk" },
    ],
    links: [
      { source: "Mark 8", target: "Aerial" },
      { source: "Mark 8", target: "GIS Mapping" },
      { source: "Mark 8", target: "Survey Intelligence" },
      { source: "Mark 8", target: "Flight Operations" },
      { source: "Aerial", target: "Structual Integrity" },
      { source: "Aerial", target: "Spaces" },
      { source: "GIS Mapping", target: "Digital Surfaces" },
      { source: "GIS Mapping", target: "3D Modeling" },
      { source: "Survey Intelligence", target: "Partners" },
      { source: "Survey Intelligence", target: "Geothermal" },
      { source: "Flight Operations", target: "United" },
      { source: "Flight Operations", target: "Delta" },
      { source: "Structual Integrity", target: "Swiftly" },
      { source: "Structual Integrity", target: "Data Visualization" },
      { source: "Spaces", target: "Data Visualization" },
      { source: "Spaces", target: "Fjord" },
      { source: "Spaces", target: "Altas" },
      { source: "Spaces", target: "Construction Operations Reliability" },
      { source: "Partners", target: "Athena" },
      { source: "United", target: "Elements" },
      { source: "Delta", target: "Juno" },
      { source: "Juno", target: "Milk" },
    ],
    config: {
      d3: {
        gravity: -100,
        linkLength: 100,
        linkStrength: 1,
        collideRadius: 55,
        paddingRadius: 30
      }
    }
  }
};