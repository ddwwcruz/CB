import * as React from 'react'
import {
    Container,
    Table
} from 'reactstrap'

import db from '../../db'

import Component from '../'

import {
    Bull
} from '../../types'

interface P {

}

interface S {
    bulls: Bull[]
    bull: Bull
}

export default class CattleBull extends Component<P, S> {
    async componentWillMount() {
        this.state = {
            bulls: [],
            bull: null
        }

        var bulls = await db.get<Bull>('SELECT * FROM Bull')
        this.setState({ bulls })
    }

    get bulls() {
        const s = this.state

        return <Table bordered striped>
            <thead>
                <tr>
                    <th>Name/ID</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {s.bulls.map((v, i) => {
                    return <tr key={i}>
                        <td>
                            <a href='#' onClick={event => {
                                this.setState({ bull: v })
                            }}>
                                {v.name}
                            </a>
                        </td>
                        <td>Active</td>
                    </tr>
                })}
            </tbody>
        </Table>
    }

    render() {
        return <Container fluid>
            {this.bulls}
        </Container>
    }
}