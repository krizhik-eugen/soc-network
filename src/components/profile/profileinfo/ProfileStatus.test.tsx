import React from 'react';
import TestRenderer from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';
describe('ProfileStatus component', ()=>{
    test('status from props should be in the state', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('IT-kamasutra')
    })

    test('<span> with status should exist', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const root = component.root;
        const span = root.findByType('span');
        // @ts-ignore
        expect(span.children[0]).not.toBeNull()
    })

    test('<input> with status should exist', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const root = component.root;
        // @ts-ignore
        expect(()=>{const input = root.findByType('input');}).toThrowError()
    })

    test('<span> with status should be shown with correct status', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const root = component.root;
        const span = root.findByType('span');
        // @ts-ignore
        expect(span.children[0]).toBe('IT-kamasutra')
    })

    test('<span> should pass in edit mode', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick()
        // @ts-ignore
        expect(()=>{
            const input = root.findByType('input');
        }).toBeDefined()
    })

    test('<span> should pass in edit mode', () => {
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick()
        const input = root.findByType('input')
        // @ts-ignore
        expect(input.props.value).toBe('IT-kamasutra')
    })

    test('callback should be called', () => {
        let mockCallback = jest.fn()
        // @ts-ignore
        const component = TestRenderer.create(<ProfileStatus status={'IT-kamasutra'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})