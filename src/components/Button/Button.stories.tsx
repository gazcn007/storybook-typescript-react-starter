import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './index'
import {withInfo} from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Components", module);

stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Button', () => {
    return (
        <div className={'controller'}>
            <br/>
            <Button
                onClick={action("Button onClick")}
            >
                Button
            </Button>
        </div>
    );
});
