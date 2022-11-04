import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
export default function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <React.Fragment>
      <Container maxWidth="sm" sx={{ my: 3 }} >
        <Grid container spacing={3} >
          <Grid item xs={3}>
            <Card>
              <CardActions>

                <Link href="/ajax_table">
                  <a>Ajax table</a>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardActions>

                <Link href="/currency_conversion">
                  <a>Currency conversion</a>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardActions>

                <Link href="/todo">
                  <a>Todo</a>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardActions>

                <Link href="/news_api">
                  <a>News Api</a>
                </Link>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>

    </React.Fragment>
  )
}
